import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import Keycloak, { KeycloakProfile } from 'keycloak-js';

interface UserPopoverProps {
    profile: KeycloakProfile | null;
    keycloak: Keycloak;
}


const UserPopover = ({ profile, keycloak }: UserPopoverProps) => (
    console.log(profile?.attributes?.picture),
    <Popover>
        <PopoverTrigger asChild>
            <Avatar>
                <AvatarImage
                    src={
                        typeof profile?.attributes?.picture === 'string'
                            ? profile.attributes.picture
                            : 'https://github.com/shadcn.png'
                    }
                />
                <AvatarFallback>
                    {profile?.username?.charAt(0).toUpperCase() || ''}
                </AvatarFallback>
            </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-80 h-54 mr-2 mt-2">
            <div className="flex flex-col items-center gap-2">
                <Avatar className="h-16 w-16">
                    <AvatarImage src={
                        typeof profile?.attributes?.picture === 'string'
                            ? profile.attributes.picture
                            : 'https://github.com/shadcn.png'
                    } />
                    <AvatarFallback>{profile?.username?.charAt(0).toUpperCase() || ''}</AvatarFallback>
                </Avatar>
                <div className="text-center mt-2">
                    <div className="font-semibold pb-2">
                        {profile?.username || 'Not available'}
                    </div>
                    <div className="text-sm text-gray-500">
                        {profile?.email || 'Not available'}
                    </div>
                    <Button variant="outline" className="border-gray-700 text-white mt-2 hover:bg-gray-800"
                        onClick={() => keycloak.accountManagement()}>
                        Account Management
                    </Button>
                </div>
            </div>
        </PopoverContent>
    </Popover>
);

export default UserPopover;