package com.example.wbdvsp2021jmillerserverjava.services;

import com.example.wbdvsp2021jmillerserverjava.models.Widget;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {
    private List<Widget> widgets = new ArrayList<>();
    {
        Widget w1 = new Widget("w1", 123l, "ABC123", "HEADING", 1, "Welcome to Topic ABC123");
        Widget w2 = new Widget("w2", 234l, "ABC123", "PARAGRAPH", 1, "LOREM IPSUM");
        Widget w3 = new Widget("w3", 345l, "ABC234", "HEADING", 2, "Welcome to Topic ABC234");
        Widget w4 = new Widget("w4", 456l, "ABC234", "PARAGRAPH", 1, "LOREM IPSUM");
        Widget w5 = new Widget("w5", 567l, "ABC234", "PARAGRAPH", 1, "LOREM IPSUM");

        widgets.add(w1);
        widgets.add(w2);
        widgets.add(w3);
        widgets.add(w4);
        widgets.add(w5);
    }

    public Widget createWidget(String tid, Widget widget){
        widget.setTopicId(tid);
        return widget;
    }

    public List<Widget> findWidgetsForTopic(String tid) {
        List<Widget> ws = new ArrayList<>();
        for (Widget w: widgets) {
            if (w.getTopicId().equals(tid)) {
                ws.add(w);
            }
        }
        return ws;
    }

    public int updateWidget(String wid, Widget widget) {
        for (int i = 0; i < widgets.size(); i++) {
            if (widgets.get(i).getId().equals(wid)) {
                widgets.set(i, widget);
                return 1;
            }
        }

        return -1;
    }

    public int deleteWidget(String wid) {
        int index = -1;

        for (int i = 0; i < widgets.size(); i++) {
            if (widgets.get(i).getId().equals(wid)) {
                index = i;
                widgets.remove(index);
                return 1;
            }
        }

        return -1;
    }

    public List<Widget> findAllWidgets() {
        return widgets;
    }

    // TODO: OPTIONAL
    public Widget findWidgetById(String wid) {
        return null;
    }
}
