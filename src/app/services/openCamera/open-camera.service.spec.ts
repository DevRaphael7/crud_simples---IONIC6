import { TestBed } from '@angular/core/testing';

import { OpenCameraService } from './open-camera.service';

describe('OpenCameraService', () => {
  let service: OpenCameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenCameraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
