import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrePortfolioComponent } from './ore-portfolio.component';

describe('OrePortfolioComponent', () => {
    let component: OrePortfolioComponent;
    let fixture: ComponentFixture<OrePortfolioComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [OrePortfolioComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(OrePortfolioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
