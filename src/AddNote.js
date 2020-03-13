import React, { Component } from 'react'

export class AddNote extends Component {
constructor(props) {
  super(props);
  this.titleInput = React.createRef();
  this.contentInput = React.createRef();
}

  render() {
    return (
      <form className="add-note" onSubmit={e => this.handleAddNote(e)}>
        <h2>Add Note</h2>
        <div class="note-title">
          <label htmlFor="note-title">Note Title *</label>
          <input 
            type="text" 
            className="addNote__control" 
            name="title" 
            id="title" 
            onChange={e => this.updateName(e.target.value)}
          />
        </div>
        <div class="note-content">
          <label htmlFor="">Note Content</label>
          <input 
            type="text" 
            class="addNote__control" 
            ref={this.contentInput}/>
        </div>
        <button>Add Note</button>
      </form>
    )
  }
}

export default AddNote
