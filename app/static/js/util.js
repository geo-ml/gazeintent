export class gazeCell {
    constructor(id) {
        this.element = document.createElement('div');
        this.element.className = 'gazeCell';
        this.element.id = id;

        this.calibrate_button = document.createElement('button');
        this.calibrate_button.className = 'gazeCellCalibrate btn btn-primary btn-sm';
        this.calibrate_button.innerHTML = '<i class="bi bi-check-lg"></i>';
        this.calibrate_button.disabled = true;

        this.element.append(this.calibrate_button);
        this.element.onclick = this.onClick.bind(this);
    }

    onClick = () => {
        if (!this.calibrate_button.disabled) {
            let payload = {
                cache: "no-cache",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: this.element.id
                })
            }
            fetch(`/api/calibrate`, payload)
                .then(response => {
                    return response.text();
                }).then(text => {
                    this.element.id < 9 ?
                        calibrateAdvance(this.element.id < 10 && parseInt(this.element.id) + 1) :
                        calibrateDestory()
                });
        }
    }
}

export function calibrateAdvance(id) {
    let elements = document.getElementsByClassName('gazeCell');
    Array.from(elements).forEach(element => {
        let button = element.getElementsByTagName('button')[0];
        button.disabled = true;
        if (element.id == id) button.disabled = false;
    });
}

function calibrateDestory() {
    // Maybe a calibration complete message
    // and then destroy
    // .. will also need to do something about the overflow:hidden (no scroll)
    document.getElementById('gazeContainer').innerHTML = '<h3>Calibration Complete</h3>'
}