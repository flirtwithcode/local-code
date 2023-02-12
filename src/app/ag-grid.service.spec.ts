import { TestBed } from '@angular/core/testing';

import { AgGridService } from './ag-grid.service';

describe('AgGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgGridService = TestBed.get(AgGridService);
    expect(service).toBeTruthy();
  });
});
