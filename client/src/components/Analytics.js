import React from 'react'
import { Progress } from 'antd'
const Analytics = ({ allTransaction }) => {
    //category
    const categories = ["Salary", "Tip", "Project", "Food", "Movie", "Bills", "Fees", "Medical"];

    //total transactions
    const totalTransactions = allTransaction.length;
    const totalIncomeTransactions = allTransaction.filter(transaction => transaction.type === 'income');
    const totalExpenseTransactions = allTransaction.filter(transaction => transaction.type === 'expense');
    const totalIncomePercentage = (totalIncomeTransactions.length / totalTransactions) * 100;
    const totalExpensePercentage = (totalExpenseTransactions.length / totalTransactions) * 100;

    //total turnover
    const totalTurnover = allTransaction.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
            return acc + transaction.amount;
        } else {
            return acc - transaction.amount;
        }
    }, 0);
    const totalIncomeTurnover = allTransaction.filter(transaction => transaction.type === 'income'
    ).reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalExpenseTurnover = allTransaction.filter(transaction => transaction.type === 'expense'
    ).reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalIncomePercentageTurnover = (totalIncomeTurnover / totalTurnover) * 100;
    const totalExpensePercentageTurnover = (totalExpenseTurnover / totalTurnover) * 100;

    return (
        < >
            <div className="row m-3">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            Total Transactions : {totalTransactions}
                        </div>
                        <div className="card-body ">
                            <h5 className="text-success">Income: {totalIncomeTransactions.length}</h5>
                            <h5 className="text-danger">Expense: {totalExpenseTransactions.length}</h5>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ marginRight: '20px' }}>
                                    <Progress
                                        type="circle"
                                        strokeColor="green"
                                        percent={totalIncomePercentage.toFixed(0)}
                                        width={120}
                                    />
                                </div>
                                <div>
                                    <Progress
                                        type="circle"
                                        strokeColor="red"
                                        percent={totalExpensePercentage.toFixed(0)}
                                        width={120}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            Total TurnOver : {totalTurnover}
                        </div>
                        <div className="card-body ">
                            <h5 className="text-success">Income: {totalIncomeTurnover.length}</h5>
                            <h5 className="text-danger">Expense: {totalExpenseTurnover.length}</h5>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ marginRight: '20px' }}>
                                    <Progress
                                        type="circle"
                                        strokeColor="green"
                                        percent={totalIncomePercentageTurnover.toFixed(0)}
                                        width={120}
                                    />
                                </div>
                                <div>
                                    <Progress
                                        type="circle"
                                        strokeColor="red"
                                        percent={totalExpensePercentageTurnover.toFixed(0)}
                                        width={120}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-3">
                <div className='col-md-4'>
                    <h4>Categorywise Income</h4>
                    {
                        categories.map((category) => {
                            const amount = allTransaction.filter(transaction => transaction.category === category && transaction.type === 'income').reduce((acc, transaction) => acc + transaction.amount, 0);
                            return (
                                amount > 0 &&
                                <div className="card">
                                    <div className="card-body">
                                        <h5>{category}</h5>
                                        <Progress percent={((amount / totalIncomeTurnover) * 100).toFixed(0)} />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='col-md-4'>
                    <h4>Categorywise Expense</h4>
                    {
                        categories.map((category) => {
                            const amount = allTransaction.filter(transaction => transaction.category === category && transaction.type === 'expense').reduce((acc, transaction) => acc + transaction.amount, 0);
                            return (
                                amount > 0 &&
                                <div className="card">
                                    <div className="card-body">
                                        <h5>{category}</h5>
                                        <Progress percent={((amount / totalExpenseTurnover) * 100).toFixed(0)} />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Analytics;