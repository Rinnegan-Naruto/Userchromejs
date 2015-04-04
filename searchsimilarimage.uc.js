// ==UserScript==
// @name           SearchSimilarImage.uc.js
// @description    Google以图搜图
// @Author         ziyunfei
// @homepageURL    http://www.cnblogs.com/ziyunfei/archive/2011/11/25/2263756.html
// @downloadURL    http://files.cnblogs.com/files/ziyunfei/searchsimilarimage.uc.js
// @version        0.0.1
// ==/UserScript==
location == "chrome://browser/content/browser.xul" && (function () {
	(function (m) {
		m.id = "CBIR-search";
		m.addEventListener("command", function () {
			var url = encodeURIComponent(gContextMenu.mediaURL || gContextMenu.imageURL || gContextMenu.bgImageURL);
			gBrowser.addTab('https://www.google.com/searchbyimage?image_url=' + url);
		}, false);
		m.setAttribute("label", "\u641C\u7D22\u7C7B\u4F3C\u56FE\u7247");
	})(document.getElementById("contentAreaContextMenu").insertBefore(document.createElement("menuitem"), document.getElementById("context-viewimage")));
	document.getElementById("contentAreaContextMenu").addEventListener("popupshowing", function () {
		gContextMenu.showItem("CBIR-search", gContextMenu.onImage || (gContextMenu.hasBGImage && !gContextMenu.isTextSelected));
	}, false);
	document.getElementById('CBIR-search').setAttribute('class','menuitem-iconic');
	document.getElementById('CBIR-search').setAttribute('image','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFS0lEQVR42u2d62oTQRTH8ya+iO/hM2i9oaggCAraeMO7olgVvNUbqHhDBBUURL8oKrWJvbe2Vaup2qZpk+y4Z1GQqtlJMrszu/v7wfmikA5z/jlz5szMSS4HAAAAAAAAAAAAAAAAAAAAAJAWVnT2KlcMbyAAQACAAAABAAIABABWBdDhm0k6EAACQAAIAAEgAASAABAAAkAACdgGHrw4YsxSKQB/4F2+lV3aT2fIZN67LDn+Xd7/41Wc4IRVxR+xOX95Z28fk+6eiV/iCPklJttpK2Wmdo7FnEz6H36dCU6EXWfdJx8wlw90bO9ZwqQmz8RvJvf6TGryrIvwzzJgJAJQ6UtopZCtH1tCBIAAEIBav6+ozt6aUM9eT6sv0wtax7ezlbp6Vfihrj74qLYc7UcASbX950cCZ7ZLcXg2EBEC0DSZsFbMpOPl80wjEQQBaFirmAj3ErqjREQgAkMAjglAQrSJcK/LwxdfA8EhAAcEIAmeDcYmK84miZkQgHwDxQm2kciDAGIWQDvO93yr1T01v1BXc/N1VfGtWvOU/0/B/7VC56lBBBCnAJoN+57v2fJcXb0u/gjyhZX5vz9z7Z5icIu39L0aiKHZKODScpDqbeCdJ1NNOX5ial6dvjEeOFjn81fuLKi9Z4dVT/9MEBmayQkQQAzFnWY4dmWsrb+37cSAGhgray8NsjtAABGabjlXHPb8zTdjf/fC3Ykgb9DBhTpBKgWgG/ol7J+/Y750mz89lJilIJUC0PnW33j0KdIxbD85qOoakcB22Th1ApBtXxj9o+VYxiKnhDqLgc0DpNQJQCa9EQtVT23Y/z6Wscgu4cOnitNLQeoE0KjoI99GyQ/iHM+uM0NaS4Gt2kCqBCCT2IiZck2t3lWIfVzvR8qhApDIhQAiDv8Pnn2xMq5D3aOhFUOT9xwyK4CwY16bY3v6ctpoiRsBtLD9s12Z9BCAvdKvZ1kAa3YXQpNBBBClADxlfYxypIwALJV/5dtne4xyfIwALAmg5oAAJqfmEYAtAch5ve0xjn+uIICoTOrprucA32drCCCruwAxOYdAABGZXLZ0WQCbD/cFUQgBZLQQdObmOIUgmyeBghRjbI1N50AIAbRpctGyEXKV21YVUN4WuPhoJFUCOHFtrOEkv+2bsTKuy/cnQ8O/PFZFAAYs7NXvu4GZfz72iGx7entC61qYrQekqRNAWBSQTPxw92hsoX9O4yWyvF7iSliMuwG5GbQx4nuBch9Qoo3r7wMyKQBheHxOdUS4FNx9OqUV+m3dBEq1AHReBYlzegdnIxGB/PSL7hMx26+DUimAsDzgT4b8SLBub9Go88O2o7Yz/0y8DZSsuplWMOKMTQdaywtW+eu9hPywvf6fiEh5HOpQJPjdDKLHT9yOXBrVeiK+9fiAevKyFNz0aaZNgM2sP3N9AsOOif8nBnGqPCHbd244iAyS1ctSkT81qLrvTQZFJa+FTiEu9QbITKPIdppDeYusXVzrGJaZTqG2OoS5/O3PXKtY2853sV9gpgQgSWGcTSJdawdDs+gYO4a63iGUbuG/agVym9i0EFza5iEAQ8fIOq1ekvi7AQhgUUSQPEG+wTpt5H//WIRr3T8RgOHr5ostyQ5HABgCwBAAZlgAHpOZSPNMCaDEZCbSSqYE8JjJTKQ9NiOAfGEZk5lA8/2WM4X/gVUmNVFWzZmGXCBja/9fAthZWMrkJsB8P+Wigi1hRrZ+IQkhInDU+UYTv5ClgHzAsXU/0tD/L5bv6D3J7sB+ti9+yAEAAAAAAAAAAAAAAAAAAAAAAADkcj8BjWROM+yCH7kAAAAASUVORK5CYII=');
})()
