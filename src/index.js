import { createRoot } from "react-dom/client";
import * as bootstrap from 'bootstrap';

const App = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <h1 className="text-center">Tabata timer</h1>
                    <form action="">
                        <div className="mb-3">
                            <label for="rounds_amount" class="form-label">Число раундов</label>
                            <input type="number" class="form-control" id="rounds_amount"></input>
                        </div>
                        <div className="mb-3">
                            <label for="rounds_length" class="form-label">Время раунда</label>
                            <input type="time" class="form-control" id="rounds_length" min="00:00:01" max="00:10:00" step='1'></input>
                        </div>
                        <div className="mb-3">
                            <label for="rounds_length" class="form-label">Время отдыха</label>
                            <input type="time" class="form-control" id="rounds_length"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);