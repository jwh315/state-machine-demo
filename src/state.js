import { Machine } from 'xstate';

const pedestrianStates = {
    initial: 'walk',
    states: {
        walk: {
            on: {
                PED_TIMER: 'wait'
            }
        },
        wait: {
            on: {
                PED_TIMER: 'stop'
            }
        },
        stop: {
            on: {
                PED_TIMER: 'walk'
            }
        }
    }
};

export const stateMachine = Machine({
    key: 'light',
    initial: 'green',
    states: {
        green: {
            on: {
                TIMER: 'yellow',
            }
        },
        yellow: {
            on: {
                TIMER: 'red',
            }
        },
        red: {
            on: {
                TIMER: 'green',
            },
            ...pedestrianStates
        }
    }
});