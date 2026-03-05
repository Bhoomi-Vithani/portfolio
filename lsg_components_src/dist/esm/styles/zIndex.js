var zIndex;
(function (zIndex) {
    /** z-index: -1 */
    zIndex[zIndex["zHidden"] = -1] = "zHidden";
    /** z-index: 0 */
    zIndex[zIndex["zBackground"] = 0] = "zBackground";
    /** z-index: 10 */
    zIndex[zIndex["zContent"] = 10] = "zContent";
    /** z-index: 20 * */
    zIndex[zIndex["zAction"] = 20] = "zAction";
    /** z-index: 30 */
    zIndex[zIndex["zHeader"] = 30] = "zHeader";
    /** should be 1338, but was/is wrongly calculated. */
    zIndex[zIndex["zDrawer"] = 1328] = "zDrawer";
    /** should be 1348, but was/is wrongly calculated. */
    zIndex[zIndex["zAboveDrawer"] = 1338] = "zAboveDrawer";
    /** should be 1358, but was/is wrongly calculated. */
    zIndex[zIndex["zImportant"] = 1348] = "zImportant";
})(zIndex || (zIndex = {}));

export { zIndex };
