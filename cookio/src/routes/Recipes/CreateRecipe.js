import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const CreateRecipe = (props) => {
	const addIngredient = (e) => {
		console.log('Fired');
	};

	const deleteIngredient = (e) => {};

	const addInstruction = (e) => {};

	const deleteInstruction = (e) => {};

	return (
		<div>
			<div className='container'>
				<h1 className='display-3'>Create A Recipe</h1>
				<Form>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Name</Form.Label>
						<Form.Control type='text' placeholder='Enter Name' required />
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId='formGridEmail'>
							<Form.Label>Cook Time in Minutes: </Form.Label>
							<Form.Control type='number' placeholder='10' />
						</Form.Group>

						<Form.Group as={Col} controlId='formGridPassword'>
							<Form.Label>Prep Time in Minutes: </Form.Label>
							<Form.Control type='number' placeholder='10' />
						</Form.Group>
					</Form.Row>

					<Form.Group controlId='exampleForm.ControlSelect1'>
						<Form.Label>Difficulty</Form.Label>
						<Form.Control as='select'>
							<option>Easy</option>
							<option>Medium</option>
							<option>Hard</option>
						</Form.Control>
					</Form.Group>

					<h1 className='display-4'>Add Ingredients</h1>
					<Form.Row>
						<Form.Group as={Col} controlId='formGridEmail'>
							<Form.Label>Ingredient Name: </Form.Label>
							<Form.Control type='text' placeholder='Sirloin' />
						</Form.Group>

						<Form.Group as={Col} controlId='formGridPassword'>
							<Form.Label>Ingredient Quantity: </Form.Label>
							<Form.Control type='text' placeholder='10 o.z.' />
						</Form.Group>
					</Form.Row>
					<Button variant='success' onClick={addIngredient}>
						Add +
					</Button>
					<hr />

					<h1 className='display-4'>Add Instrutctions</h1>
					<Button variant='success' onClick={addInstruction}>
						Add A Step +
					</Button>
					<hr />
					<Button variant='primary' type='submit'>
						Create!
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default CreateRecipe;
