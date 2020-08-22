import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote=()=>{
    return(<><div><form>
    <input type="text" placeholder="Write Your Importence"/><br/>
    <textarea row='' coloumn='' placeholder="Write" />
    <Button>
    <AddIcon className="newBtn"/>
    </Button>
    </form>
    </div> 
    </>
    );
};
export default CreateNote;