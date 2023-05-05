import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenformComponent } from './drivenform.component';

describe('DrivenformComponent', () => {
  let component: DrivenformComponent;
  let fixture: ComponentFixture<DrivenformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivenformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivenformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
