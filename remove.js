<div className="form-group">
              <label className="form-label">Option 1</label>
              <input className="form-control" type="text" value={this.props.data.currentquestion.options ? this.props.data.currentquestion.options.a : "No option"}/>
            </div>
            <div className="form-group">
              <label className="form-label">Option 2</label>
              <input className="form-control" type="text" value={this.props.data.currentquestion.options ? this.props.data.currentquestion.options.b : "No option"}/>
            </div>
            <div className="form-group">
              <label className="form-label">Option 3</label>
              <input className="form-control" type="text" value={this.props.data.currentquestion.options ? this.props.data.currentquestion.options.c : "No option"}/>
            </div>
          </div>