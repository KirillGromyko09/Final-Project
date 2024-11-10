import { useState, useEffect } from 'react';
import { useGetProductsQuery } from '../../../store/productsApi/productsApi.js';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../Products/ProductCard';
import { Box, Typography, Snackbar } from '@mui/material';
import { removeFavoriteItem, loadFavFromLS } from '../../../store/slices/favoritesSlice';
import { styles } from './styles';

const FavProductList = () => {
    const dispatch = useDispatch();
    const { data: products, error, isLoading } = useGetProductsQuery();
    const favorites = useSelector((state) => state.favorites.items || []);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        dispatch(loadFavFromLS());
    }, [dispatch]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    const handleRemoveFavorite = (code) => {
        dispatch(removeFavoriteItem(code));
        setSnackbarMessage('Товар успішно видалений з обраного');
        setShowSnackbar(true);
    };

    const favoriteProducts = products.filter(product =>
        favorites.some(fav => fav.code === product.id)
    );

    const handleCloseSnackbar = () => {
        setShowSnackbar(false);
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={styles.header}>Обрані товари</Typography>
            <Box sx={styles.productList}>
                {favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            imageUrl={product.image}
                            code={product.id}
                            title={product.title}
                            rating={product.rating.rate}
                            ratingCount={product.rating.count}
                            oldPrice={parseFloat((product.price * 1.1).toFixed(2))}
                            discount={10}
                            newPrice={product.price}
                            bonus={Math.floor(product.price * 0.1).toFixed(2)}
                            onRemoveFavorite={() => handleRemoveFavorite(product.id)}
                        />
                    ))
                ) : (
                    <Typography variant="h6" sx={styles.emptyFav}>
                        В обраному немає товарів
                    </Typography>
                )}
                <Snackbar
                    open={showSnackbar}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    message={snackbarMessage}
                />
            </Box>
        </Box>
    );
};

export default FavProductList;
