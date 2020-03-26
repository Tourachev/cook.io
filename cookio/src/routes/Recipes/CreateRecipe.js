import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IngredientForm from '../../components/Recipe/IngredientForm';
import InstructionForm from '../../components/Recipe/InstructionForm';
import axios from 'axios';
import RecipeContext from '../../context/recipe-context/RecipeContext';
import AuthContext from '../../context/auth-context/AuthContext';

const CreateRecipe = () => {
	const recipeContext = useContext(RecipeContext);
	const authContext = useContext(AuthContext);
	const { user } = authContext;

	const [ ingredients, setIngredients ] = useState([ { name: 'Potato', quantity: '2' } ]);
	const [ instructions, setInstructions ] = useState([ { instruction: 'Peel the potatoes' } ]);
	const [ recipe, setRecipe ] = useState({
		name: '',
		ingredients: ingredients,
		cooktime: '',
		preptime: '',
		difficulty: 'Easy',
		instructions: instructions
	});

	const addIngredient = (newIngredient) => {
		const newIngredients = [ ...ingredients, { name: newIngredient.name, quantity: newIngredient.quantity } ];
		setIngredients(newIngredients);
	};

	const deleteIngredient = (ingredientIndex) => {
		const newIngredients = ingredients.filter((_, index) => index !== ingredientIndex);
		setIngredients(newIngredients);
	};

	const addInstruction = (newInstruction) => {
		const newInstructions = [ ...instructions, { instruction: newInstruction.instruction } ];
		setInstructions(newInstructions);
	};

	const deleteInstruction = (instructionIndex) => {
		const newInstructions = instructions.filter((_, index) => index !== instructionIndex);
		setInstructions(newInstructions);
	};

	const handleRecipeChange = (event) => {
		event.persist();
		setRecipe((inputs) => ({
			...inputs,
			[event.target.id]: event.target.value
		}));
	};

	const handleRecipeSubmit = (e) => {
		e.preventDefault();
		if (!recipe) return;
		recipeContext.addRecipe(recipe);

		// axios.post('http://localhost:5000/api/recipes/', {
		// 	name: recipe.name,
		// 	ingredients: recipe.ingredients,
		// 	cooktime: recipe.cooktime,
		// 	preptime: recipe.cooktime,
		// 	difficulty: recipe.difficulty,
		// 	instructions: recipe.instructions
		// });

		setRecipe({
			name: '',
			ingredients: ingredients,
			cooktime: '',
			preptime: '',
			difficulty: '',
			instructions: instructions
		});
	};
	return (
		<div>
			<div className='container'>
				<h1 className='display-3'>Create A Recipe</h1>
				<Form onSubmit={handleRecipeSubmit}>
					<Form.Group controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control type='text' placeholder='Enter Name' required onChange={handleRecipeChange} />
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId='cooktime'>
							<Form.Label>Cook Time in Minutes: </Form.Label>
							<Form.Control type='number' placeholder='10' onChange={handleRecipeChange} required />
						</Form.Group>

						<Form.Group as={Col} controlId='preptime'>
							<Form.Label>Prep Time in Minutes: </Form.Label>
							<Form.Control type='number' placeholder='10' onChange={handleRecipeChange} required />
						</Form.Group>
					</Form.Row>

					<Form.Group controlId='difficulty'>
						<Form.Label>Difficulty</Form.Label>
						<Form.Control as='select' onChange={handleRecipeChange} required>
							<option value='Easy' selected>
								Easy
							</option>
							<option value='Medium'>Medium</option>
							<option value='Hard'>Hard</option>
						</Form.Control>
					</Form.Group>

					<h1 className='display-4'>Add Ingredients</h1>
					<IngredientForm addIngredient={addIngredient} />
					<br />
					<div className='current-ingredients'>
						<TableContainer component={Paper}>
							<Table>
								<TableHead className='table-head'>
									<TableRow>
										<TableCell>
											<h4>Name</h4>
										</TableCell>
										<TableCell align='right'>
											<h4>Quantity</h4>
										</TableCell>
										<TableCell align='right'>
											<h4>Delete</h4>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{ingredients.map((recipe, index) => (
										<TableRow key={index}>
											<TableCell component='th' scope='row'>
												{recipe.name}
											</TableCell>
											<TableCell align='right'>{recipe.quantity}</TableCell>
											<TableCell align='right'>
												<IconButton edge='end' aria-label='comments'>
													<DeleteIcon onClick={() => deleteIngredient(index)} />
												</IconButton>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>

					<h1 className='display-4'>Add Instrutctions</h1>
					<InstructionForm addInstruction={addInstruction} />
					<br />

					<div className='current-instructions'>
						<TableContainer component={Paper}>
							{instructions.map((instruction, index) => (
								<Table>
									<TableHead className='table-head'>
										<TableRow>
											<TableCell>
												<h4>Step {index + 1}</h4>
											</TableCell>
											<TableCell align='right'>
												<IconButton edge='end' aria-label='comments'>
													<DeleteIcon onClick={() => deleteInstruction(index)} />
												</IconButton>
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow key={index}>
											<TableCell component='th' scope='row'>
												{instruction.instruction}
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							))}
						</TableContainer>
					</div>

					<hr />
					<Button variant='outline-success' size='lg' block type='submit'>
						Create!
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default CreateRecipe;
