import { TestBed } from '@angular/core/testing';

import { UserAuthhGuard } from './user-authh.guard';

describe('UserAuthhGuard', () => {
  let guard: UserAuthhGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAuthhGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
