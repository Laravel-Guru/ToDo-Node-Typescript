import pool from '../dbconfig/dbconnector';

class TodosController {

    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM todos";
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();

            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async add(req, res) {

        try{
            const client = await pool.connect();

            const {content, isCompleted} = req.body;

            const sql = "SELECT * FROM todos";
            const { rows } = await client.query(sql);
            
            //This takes our content that we sent in and inserts into the todo table
            const { rows1 } = await client.query('INSERT INTO todos (content, "isCompleted") VALUES ($1, $2)', [content, isCompleted]);
            
            res.json({id: rows.length+1, content: content, isCompleted: isCompleted});
        } catch(error){
            res.status(400).send(error);
            console.log(error)
        }
    }

    public async delete(req, res) {

        try{
            const client = await pool.connect();

            const id = parseInt(req.params.id);
            
            //This takes our content that we sent in and inserts into the todo table
            await client.query('DELETE FROM todos WHERE id = $1', [id]);
            
            res.status(200).send({ message: 'Todo deleted successfully!', id });
        } catch(error){
            res.status(400).send(error);
            console.log(error)
        }
    }

    public async update(req, res) {

        try{
            const client = await pool.connect();

            const id = parseInt(req.params.id);
            const {content, isCompleted} = req.body;
            
            //This takes our content that we sent in and inserts into the todo table
            await client.query('UPDATE todos SET id = $1, content = $2, "isCompleted" = $3 WHERE id = $1',
            [id, content, isCompleted]);
            
            res.status(200).send({ message: 'Todo updated successfully!', id });
        } catch(error){
            res.status(400).send(error);
            console.log(error)
        }
    }
}

export default TodosController;
