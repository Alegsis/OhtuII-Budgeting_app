import Budget from '../components/budget/Budget';
import AddCategory from "../components/categories/AddCategory";
import AddSubCategory from "../components/categories/AddSubCategory";
import MoveDeleteSubCategory from "../components/categories/MoveDeleteSubCategory";
import React from 'react'
import AddBudget from '../components/budget/AddBudget';

const Dashboard = () => {
  return (
      <div className="home">
        <AddCategory></AddCategory>
        <AddSubCategory></AddSubCategory>
          <MoveDeleteSubCategory></MoveDeleteSubCategory>
        <AddBudget/>
        <Budget></Budget>
      </div>
  );

};

export default Dashboard;