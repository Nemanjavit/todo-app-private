import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Visible } from "react-grid-system";

const BottomNav = ({ list, clearCompleted }) => {
	return (
		<div className="footer">
			<Visible lg xl xxl>
				<Row nogutter justify="between" align="center" className="bottomNav">
					<p className="items__left">{list.length} items left</p>
					<div className="bottomNav__links">
						<NavLink
							activeClassName="selected"
							className="bottomNav__Links__item"
							to={"/completed"}
							exact
						>
							Completed
						</NavLink>
						<NavLink
							activeClassName="selected"
							className="bottomNav__Links__item"
							to={"/"}
							exact
						>
							All
						</NavLink>
						<NavLink
							activeClassName="selected"
							className="bottomNav__Links__item"
							to={"/active"}
							exact
						>
							Active
						</NavLink>
					</div>
					<button className="bottomNav__button" onClick={clearCompleted}>
						Clear Completed
					</button>
				</Row>
			</Visible>
			{/* mobile view */}
			<Visible xs sm md>
				<Row nogutter justify="between" align="center" className="bottomNav">
					<p className="items__left">{list.length} items left</p>
					<button className="bottomNav__button" onClick={clearCompleted}>
						Clear Completed
					</button>
				</Row>
				<Row
					className="bottomNav__Links__mobile"
					justify="center"
					align="center"
					nogutter
				>
					<NavLink
						activeClassName="selected"
						className="bottomNav__Links__item"
						to="/completed"
						exact
					>
						Completed
					</NavLink>
					<NavLink
						activeClassName="selected"
						className="bottomNav__Links__item"
						to="/"
						exact
					>
						All
					</NavLink>
					<NavLink
						activeClassName="selected"
						className="bottomNav__Links__item"
						to="/Active"
						exact
					>
						Active
					</NavLink>
				</Row>
			</Visible>
		</div>
	);
};

export default BottomNav;
