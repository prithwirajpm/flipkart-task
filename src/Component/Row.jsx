import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap'
import BuyForm from './BuyForm';

function Row() {
    const [allData, setAllData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            console.log(response.data);
            setAllData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className='container '>
                <div className='d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-3'>
                    {allData.map((item) => (
                        <div key={item.id} className='col-12 d-flex justify-content-center align-items-center'>
                            {/* < xs={12} sm={6} md={4} lg={3} className='mb-3'> */}
                            <Card key={item.id} style={{ width: '18rem' }} className='m-4'>
                                <Card.Img variant="top" src={item.image} alt='flip' className='p-3' height="300px" />
                                <Card.Body>
                                    <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                                    <Card.Text style={{ textAlign: 'justify' }}>
                                        {item.description.slice(0, 93)}
                                        <h4 className='pt-2 pb-2 text-center'>PRICE : {item.price}</h4>
                                    </Card.Text>
                                    <div className='d-flex justify-content-center align-items-center'><BuyForm orderData={allData} orderId={item.id}/></div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Row;
