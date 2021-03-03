import './App.css';
import DataList from './components/DataList';


function App() {
  return (
    <>
      {/* <div className="flex">
          <div>
            Show <input type="number" onChange={this.onChangeHandle} />
            Entries
          </div>
          <div>
            <label>
              Pick Api type:{this.state.value}
              <select
                value={this.state.value}
                onChange={this.onChangeHandleApi}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>
          </div>
        </div> */}
      <DataList/>
    </>
  );
}

export default App;
