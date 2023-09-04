import React from 'react'
import {Purchase} from './purchase'
import './basket.css'


export const Basket = (props) => {

	return (
		<div className = {'container'}>
			<p>It's basket</p>
			<p>props.count</p>
			<p>props.basket[0]</p>

			{ props.basket.map((item) => 

				<Purchase
					key={item.id}
					id = {item.id}
				/>
			)
			}
		</div>

		)
}