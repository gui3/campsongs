/**
 * global constants
 */
const CLIENT_CONFIG = {
    /**
     * enables log.debug and developper toolbox
     * !! don't forget to set to false for PRODUCTION !!
     */
    DEV_MODE: true,

    /**
     * uses fake data instead of api calls
     * !! only active in DEV_MODE
     */
    USE_MOCK_DATA: true,

    /**
     * will show debug messages at startup
     * ! prefer to use dev panel > debug mode on > client reboot
     */
    START_IN_DEBUG_MODE: false,

    /**
     * logs history max length
     */
    LOG_MEMORY: 100,

}

export default CLIENT_CONFIG