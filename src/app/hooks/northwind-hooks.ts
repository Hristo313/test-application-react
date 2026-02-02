import { useCallback, useEffect, useState } from 'react';
import { CategoriesType } from '../models/Northwind/categories-type';
import { getCategories } from '../services/northwind';

export const useGetCategories = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  const requestCategories = useCallback(() => {
    let ignore = false;
    getCategories()
      .then((data) => {
        if (!ignore) {
          setCategories(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCategories();
  }, [requestCategories]);

  return { requestNorthwindCategories: requestCategories, northwindCategories: categories, setNorthwindCategories: setCategories };
}
