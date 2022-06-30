import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ searchFor }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// handle accidental input of spaces
		searchFor(searchTerm.trim() || undefined);
		setSearchTerm(searchTerm.trim());
	};

	return (
		<div className="SearchForm mb-4">
			<form className="form-inline" onSubmit={handleSubmit}>
				<input
					className="form-control form-control-lg flex-grow-1"
					name="searchTerm"
					placeholder="Enter search term.."
					value={searchTerm}
					onChange={handleChange}
				/>
				<button type="submit" className="btn btn-lg btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default SearchForm;
