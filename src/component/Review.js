import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import images from './../constant/images'

const Review = ({ editable, value, size }) => {
    const [selectReview, setReviewSelect] = useState(value ? value : 0);

    if (!editable && editable !== false) {
        editable = true;
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {[1, 2, 3, 4, 5].map((starData, index) => (
                <View key={starData}>
                    <TouchableOpacity
                        disabled={!editable}
                        style={{ marginRight: 3 }}
                        onPress={() => {
                            setReviewSelect(starData);
                        }}
                    >
                        {starData < selectReview || starData == selectReview ? (
                            <Image
                                source={size ? images.star_2 : images.star}
                                style={{
                                    tintColor: 'green',
                                    height: size ? 34 : 15,
                                    width: size ? 34 : 15,
                                }}
                            />
                        ) : (
                            <Image
                                source={size ? images.star_2 : images.star}
                                style={{
                                    tintColor: '#DEDEDE',
                                    height: size ? 34 : 15,
                                    width: size ? 34 : 15,
                                }}
                            />
                        )}
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

export default Review;
