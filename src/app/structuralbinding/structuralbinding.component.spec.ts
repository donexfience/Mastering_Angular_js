import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralbindingComponent } from './structuralbinding.component';

describe('StructuralbindingComponent', () => {
  let component: StructuralbindingComponent;
  let fixture: ComponentFixture<StructuralbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralbindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
