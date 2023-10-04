import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  slug:{
    type:String,
  },
  metadesc:{
    type:String
  }
},{
  timestamps:true
});

const BlogModel = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default BlogModel;
