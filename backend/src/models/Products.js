import mongoose, { Schema } from "mongoose";
const productSchema =new mongoose.Schema({

nombre :{
    type: String, 
    required: true 
},
descripcion :{
    
    type: String
},
precio:{
type: Number

},
categoria:{
    type: String
},
stock:{
    type :Number,
    default: 0
},
fechaingreso :{
type: Date,
default: Date.now
}
})
export default mongoose.model('Product', productSchema);
