import { TestBed, async, inject } from '@angular/core/testing';

import { PreventDirtyCheckingGuard } from './prevent-dirty-checking.guard';

describe('PreventDirtyCheckingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventDirtyCheckingGuard]
    });
  });

  it('should ...', inject([PreventDirtyCheckingGuard], (guard: PreventDirtyCheckingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
