import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import sanityClient from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "category"]
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </ScrollView>
  );
};

export default Categories;
