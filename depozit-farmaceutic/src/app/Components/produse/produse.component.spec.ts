import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduseComponent } from './produse.component';

describe('ProduseComponent', () => {
  let component: ProduseComponent;
  let fixture: ComponentFixture<ProduseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduseComponent]
    });
    fixture = TestBed.createComponent(ProduseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
