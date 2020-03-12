import React from 'react';
import ItemCategory from '../components/ItemCategory'

function BoxCategories(props){

    return(
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
            </div>
            <div className="card-body">
                <div className="row">

                    <ItemCategory
                        title="Parlantes"
                        color="bg-success"
                    />
                   
                   <ItemCategory
                        title="Subwoofer"
                        color="bg-info"
                    />
                    <ItemCategory
                        title="Auriculares"
                        color="bg-warning"
                    />
                     <ItemCategory
                        title="Sin Stock"
                        color="bg-danger"
                    />
                     <ItemCategory
                        title="Vintage"
                        color="bg-dark"
                    />
                    <ItemCategory
                        title="Monitores"
                        color="bg-primary"
                    />
                </div>
            </div>
        </div>
    </div>
    )

}

export default BoxCategories;