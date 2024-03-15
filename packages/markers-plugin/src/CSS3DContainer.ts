import { events, type Viewer } from '@photo-sphere-viewer/core';
import { Object3D, PerspectiveCamera, Scene } from 'three';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export class CSS3DContainer {

    element: HTMLElement;

    private readonly renderer: CSS3DRenderer;
    private readonly scene: Scene;
    private readonly camera: PerspectiveCamera;

    constructor(
        private viewer: Viewer
    ) {

        this.element = document.createElement('div');
        this.element.className = 'psv-markers-css3d-container';

        this.renderer = new CSS3DRenderer({ element: this.element });
        this.scene = new Scene();
        this.camera = new PerspectiveCamera();

        viewer.addEventListener(events.ReadyEvent.type, this, { once: true });
        viewer.addEventListener(events.PositionUpdatedEvent.type, this);
        viewer.addEventListener(events.ZoomUpdatedEvent.type, this);
        viewer.addEventListener(events.SizeUpdatedEvent.type, this);
        viewer.addEventListener(events.RenderEvent.type, this);
    }

    handleEvent(e: Event) {
        switch (e.type) {
            case events.ReadyEvent.type:
                this.updateSize();
                this.updateCamera();
                break;
            case events.PositionUpdatedEvent.type:
            case events.ZoomUpdatedEvent.type:
                this.updateCamera();
                break;
            case events.SizeUpdatedEvent.type:
                this.updateSize();
                break;
            case events.RenderEvent.type:
                this.render();
                break;
        }
    }

    destroy(): void {
        this.viewer.removeEventListener(events.ReadyEvent.type, this);
        this.viewer.removeEventListener(events.PositionUpdatedEvent.type, this);
        this.viewer.removeEventListener(events.ZoomUpdatedEvent.type, this);
        this.viewer.removeEventListener(events.SizeUpdatedEvent.type, this);
        this.viewer.removeEventListener(events.RenderEvent.type, this);
    }

    private updateCamera() {
        this.camera.aspect = this.viewer.renderer.camera.aspect;
        this.camera.fov = this.viewer.renderer.camera.fov;

        this.camera.position.copy(this.viewer.renderer.camera.position);
        this.camera.rotation.copy(this.viewer.renderer.camera.rotation);

        this.camera.updateProjectionMatrix();
    }

    private updateSize() {
        const size = this.viewer.getSize();
        this.renderer.setSize(size.width, size.height);
    }

    private render() {
        this.renderer.render(this.scene, this.viewer.renderer.camera);
    }

    addObject(marker: Object3D) {
        this.scene.add(marker);
    }

    removeObject(marker: Object3D) {
        this.scene.remove(marker);
    }

}
