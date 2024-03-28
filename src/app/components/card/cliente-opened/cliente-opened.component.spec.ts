import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteOpenedComponent } from './cliente-opened.component';

describe('ClienteOpenedComponent', () => {
  let component: ClienteOpenedComponent;
  let fixture: ComponentFixture<ClienteOpenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteOpenedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteOpenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
