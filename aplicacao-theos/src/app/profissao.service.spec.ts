import { TestBed, inject } from '@angular/core/testing';

import { ProfissaoService } from './profissao.service';

describe('ProfissaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfissaoService]
    });
  });

  it('should be created', inject([ProfissaoService], (service: ProfissaoService) => {
    expect(service).toBeTruthy();
  }));
});
