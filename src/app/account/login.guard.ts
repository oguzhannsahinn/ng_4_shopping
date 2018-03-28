import {Injectable} from "@angular/core"
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router} from "@angular/router"
import {AccountService} from "./account.service"

@Injectable()
export class LoginGuard implements CanActivate
{
    constructor(private accountService:AccountService,private router:Router)
    {}

    canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean //next gidilmek istenen - router:geldiği yer bilgisini tutar.
    
    {
        let logged = this.accountService.isLoggedIn(); //giriş yapıp yapmadıgını gorme komutu
    
        if(logged)
        {
            return true;
        }

        this.router.navigate(["account"],{queryParams:{returnUrl:state.url}})        
        return false;
        
    
    }




}