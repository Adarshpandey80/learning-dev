import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

const fetchProduct = createAsyncThunk("products/fetchProducts" ,async()=>{
    const response = await axios.get("https://fakestoreapi.com/product")
    return response.data;
})


const productSlice = createSlice ({
    name: 'producst',
    initalState: {
        item:[],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers : (builder) =>{
        builder
        .addCase('fetchProducts/pending', (state) => {
            state.loading = true;
        })
        .addCase('fetchProducts/fulfilled' , (state , action)=>{
            state.loading = false;
            state.item =  action.payload;
        })
        .addCase('fetchProducts/rejected' ,(state,action)=>{
            state.loading = false;
            state.item = action.error.message;
        })
    }
})