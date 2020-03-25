import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const IngredientForm = ({addIngredient}) => {
	const [value, setValue] = useState({name: '', quantity: ''});

	const handleChange = event => {
		event.persist();
		setValue(inputs => ({
			...inputs,
			[event.target.id]: event.target.value
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		setValue({name: '', quantity: ''});
		addIngredient(value);
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Row>
					<Form.Group as={Col} controlId='name'>
						<Form.Label>Ingredient Name: </Form.Label>
						<Form.Control
							type='text'
							placeholder='Sirloin'
							value={value.name}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId='quantity'>
						<Form.Label>Ingredient Quantity: </Form.Label>
						<Form.Control
							type='text'
							placeholder='10 o.z.'
							value={value.quantity}
							onChange={handleChange}
						/>
					</Form.Group>

					<Button
						variant='outline-success'
						onClick={handleSubmit}
						id='add-ingredient-button'
					>
						Add +
					</Button>
				</Form.Row>
			</Form>
		</div>
	);
};

export default IngredientForm;
