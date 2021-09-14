import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import Checkbox from '@material-ui/core/Checkbox';



const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0rem 0rem',
    
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context)
  const classes = []
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  if (todo.completed) {
    classes.push('done')
  }

  return (
    <li style={styles.li} id='li'>
      <span id='editor' contenteditable="true" style={{outline:"none" , }} className={classes.join(' ')}>
        <Checkbox
        style={{padding: 0}}
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
         
        
        &nbsp;
        {todo.title}
      </span>

      <button className='rm' onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem

