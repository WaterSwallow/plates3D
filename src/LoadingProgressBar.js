export class LoadingProgressBar {

    constructor(container) {

        this.idGen = 0;

        this.tasks = [];

        this.container = container || document.body;

        this.progressBarContainerOuter = document.createElement('div');
        this.progressBarContainerOuter.className = 'outerContainer';
        this.progressBarContainerOuter.style.display = 'none';

        this.progressBarBox = document.createElement('div');
        this.progressBarBox.className = 'progressBarBox';

        this.progressBarBackground = document.createElement('div');
        this.progressBarBackground.className = 'progressBarBackground';

        this.progressBar = document.createElement('div');
        this.progressBar.className = 'progressBar';

        this.progressBarBackground.appendChild(this.progressBar);
        this.progressBarBox.appendChild(this.progressBarBackground);
        this.progressBarContainerOuter.appendChild(this.progressBarBox);
        this.container.appendChild(this.progressBarContainerOuter);

        const style = document.createElement('style');
        style.innerHTML = `

            .outerContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 05
                position: absolute;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 23px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                border: #003300 1px solid;
                box-shadow: inset 0 0 10px #003300;
            }

        `;
        this.progressBarContainerOuter.appendChild(style);
    }

    show() {
        this.progressBarContainerOuter.style.display = 'block';
    }

    hide() {
        this.progressBarContainerOuter.style.display = 'none';
    }

    setProgress(progress) {
        this.progressBar.style.width = progress + '%';
    }

    setContainer(container) {
        if (this.container) {
            this.container.removeChild(this.progressBarContainerOuter);
        }
        this.container = container;
        this.container.appendChild(this.progressBarContainerOuter);
        this.progressBarContainerOuter.style.zIndex = this.container.style.zIndex + 1;
    }

}
