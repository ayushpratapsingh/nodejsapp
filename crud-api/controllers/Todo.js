const Todo = require("../model/Todo");
const getTodos = async (req, res) => {
	try{
		const data = await Todo.find();
		console.log(data);
		if(!data.length)
		{
			return res.status(404).json({message: "Can not find data"});
		}
		else
		{
		res.status(200).json(data);
		}
	}
	catch(err){
		res.status(500).json({message: error.message});
	}
};

const createTodos = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  });

  todo.save().then(() =>{
        res.json(todo);
    }).catch((err)=>{
        res.send(err);
});};

const updateTodos = async (req, res) => {
      try{
       const udata= await Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      },
    },
    { new: true });
      
	res.status(200).json(udata);
	
} catch (err)
{
        res.status(500).send(err);
}
}
const deleteTodos = async (req, res) => {
 try{
  const ddata=await Todo.deleteOne({ _id: req.params.todoID });
    console.log(ddata);
	 res.status(200).json({"message":"data deleted"});
 }
   catch(err)
	{
		res.status(500).send(err);
	}
}
module.exports = {
  getTodos,
  createTodos,
  updateTodos,
  deleteTodos
};
