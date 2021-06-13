//A basic use of MPV player

#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>

//including the header to use the functions
//all these functions are documented here
//https://github.com/mpv-player/mpv/blob/master/libmpv/client.h
#include <mpv/client.h>

int main(int argc, char *argv[]){

    //creating mpv instance//

    mpv_handle *mp = mpv_create();

    //initializing mpv instance
    //actually we can configure mpv for different 
    //settings/config before using initialize hence the two steps create and initialize
    //for e.g we can tell to use on screen controller for playback
    //we can say to use all the keyboard binding created for it

    mpv_initialize(mp);
    const char *cmd[] = {"loadfile", argv[1], NULL};

    //exceutes command of playing a file here => loadfile
    mpv_command(mp, cmd);

        //play until the said event is recorded from the player
        while (1) {

            //waiting for the events to occur
            //TODO: find out what is this timeout parameter with 10000 value do
        mpv_event *event = mpv_wait_event(mp, 10000);

        //print all the events occuring
        printf("event: %s\n", mpv_event_name(event->event_id));

        //if shutdown event is received close the playback
        if (event->event_id == MPV_EVENT_SHUTDOWN)
            break;
    }

    //destroy the mpv instance
    mpv_terminate_destroy(mp);
}
