import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl='https://c7.alamy.com/comp/GR76JA/full-table-of-sushi-set-GR76JA.jpg'
        title='testing'
      />
      <CategoryCard
        imgUrl='https://c7.alamy.com/comp/GR76JA/full-table-of-sushi-set-GR76JA.jpg'
        title='testing'
      />
      <CategoryCard
        imgUrl='https://c7.alamy.com/comp/GR76JA/full-table-of-sushi-set-GR76JA.jpg'
        title='testing'
      />

      <CategoryCard
        imgUrl='https://c7.alamy.com/comp/GR76JA/full-table-of-sushi-set-GR76JA.jpg'
        title='testing'
      />

      <CategoryCard
        imgUrl='https://c7.alamy.com/comp/GR76JA/full-table-of-sushi-set-GR76JA.jpg'
        title='testing'
      />

      <CategoryCard
        imgUrl='https://c7.alamy.com/comp/GR76JA/full-table-of-sushi-set-GR76JA.jpg'
        title='testing'
      />
    </ScrollView>
  );
};

export default Categories;
