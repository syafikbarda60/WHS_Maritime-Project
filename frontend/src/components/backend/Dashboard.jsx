//import React from 'react';
 //import Header from '@components/frontend/pages/Header';
    import Footer from '@components/frontend/pages/Footer';
    import Header_ns from '@components/frontend/pages/Header_ns';
    import { useNavigate } from 'react-router-dom';
    import React, { useContext } from 'react';
    import { AuthContext } from '@components/backend/context/Auth';



const Dashboard = () => {

    const { user, logout } = useContext(AuthContext); // 
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // 
        navigate('/admin/login'); // Arahkan ke halaman login setelah logout 
    };

    return (
        <>
            <section className='header'>
            <Header_ns />
            </section>

            <section className='dashboard'>
            <main style={{ paddingTop: '80px' }}> 
                <div className="container my-5"> 
                    <div className="row">
                        <div className="col-md-3">
                        <div className="card border-0 shadow">
                            <div className="card-body">  
                            <h4 className="mb-4">Sidebar</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-0 mb-2">
                                <a href="#" className="btn btn-link text-start">Dashboard</a>
                                </li>
                                <li className="list-group-item p-0 mb-2">
                                <a href="#" className="btn btn-link text-start">News</a>
                                </li>
                                <li className="list-group-item p-0">
                                <button
                                    className="btn btn-danger w-100"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-9"> 
                            <div className="card border-0 shadow">
                                <div className="card-body d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}> {/* [00:18:57] [00:20:32] */}
                                    <h4>Welcome to Admin Console</h4> {/* [00:18:25] [00:20:45] */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </section>

            <Footer /> 
        </>
    );
};

export default Dashboard;