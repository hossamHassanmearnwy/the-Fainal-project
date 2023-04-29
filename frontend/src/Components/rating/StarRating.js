import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const {t, i18n} = useTranslation();
    document.body.dir = i18n.dir();
    const [rating, setRating] = useState(0);

    const handleRatingClick = (newRating) => {
        setRating(newRating);
    };

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={index} className='mb-3' style={{position:'relative' , left:'-40%'}}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => handleRatingClick(ratingValue)}
                            style={{display: 'none'}}
                        />
                        <FaStar
                            className="star"
                            color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                            size={20}
                            role='button'
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;