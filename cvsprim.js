class canvasPrimitive {
    constructor(isFullscreen, canvas) {
        // If fullscreen is enabled or not
        if (isFullscreen) this.fsCanvas = true;
        else this.fsCanvas = false;
        
        // If canvas is provided or not
        if (canvas) this.cvs = canvas;
        else this.cvs = document.querySelector("canvas");
        this.ctx = this.cvs.getContext("2d");
    }

    initialize() {
        // Start the loop and set the window size
        if (this.fsCanvas) {
            this.refreshFullscreen();
            window.addEventListener("resize", () => {
                this.refreshFullscreen();
            });
        }
        return this;
    }

    update(callback) {
        // Loop the callback function
        if (typeof callback == "function") {
            window.requestAnimationFrame(() => {
                callback();
                this.update(callback);
            });
        } else {
            window.requestAnimationFrame(() => {
                this.update();
            })
        }
        return this;
    }

    refreshFullscreen() {
        // Set the window size to fullscreen
        this.cvs.width = window.innerWidth;
        this.cvs.height = window.innerHeight;
        return this;
    }
}
