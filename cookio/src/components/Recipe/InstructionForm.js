import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const InstructionForm = ({addInstruction}) => {
	const [value, setValue] = useState({instruction: ''});

	const handleChange = event => {
		event.persist();
		setValue(inputs => ({
			...inputs,
			[event.target.id]: event.target.value
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		// if (!value) return;
		addInstruction(value);
		setValue({instruction: ''});
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Row>
					<Form.Group as={Col} controlId='instruction'>
						<Form.Label>Next Step:</Form.Label>
						<Form.Control
							as='textarea'
							rows='3'
							onChange={handleChange}
						/>
					</Form.Group>

					<Button
						variant='outline-success'
						onClick={handleSubmit}
						id='add-step-button'
					>
						Add A Step +
					</Button>
				</Form.Row>
			</Form>
		</div>
	);
};

export default InstructionForm;
