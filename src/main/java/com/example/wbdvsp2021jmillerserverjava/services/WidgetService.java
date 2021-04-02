package com.example.wbdvsp2021jmillerserverjava.services;

import com.example.wbdvsp2021jmillerserverjava.models.Widget;
import com.example.wbdvsp2021jmillerserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository repository;

//    private List<Widget> widgets = new ArrayList<>();
//    {
//        Widget w1 = new Widget("w1", 123l, "ABC123", "HEADING", 1, "Welcome to Topic ABC123");
//        Widget w2 = new Widget("w2", 234l, "ABC123", "PARAGRAPH", 1, "LOREM IPSUM");
//        Widget w3 = new Widget("w3", 345l, "ABC234", "HEADING", 2, "Welcome to Topic ABC234");
//        Widget w4 = new Widget("w4", 456l, "ABC234", "PARAGRAPH", 1, "LOREM IPSUM");
//        Widget w5 = new Widget("w5", 567l, "6047e3dcf10b760017274c0c", "PARAGRAPH", 1, "LOREM IPSUM");
//
//        widgets.add(w1);
//        widgets.add(w2);
//        widgets.add(w3);
//        widgets.add(w4);
//        widgets.add(w5);
//    }

    public Widget createWidget(String tid, Widget widget){
        widget.setTopicId(tid);
        return repository.save(widget);

//        widget.setId((new Date()).getTime());
//        widgets.add(widget);
//        return widget;
    }

    public List<Widget> findWidgetsForTopic(String tid) {
        return repository.findWidgetsForTopic(tid);
//        List<Widget> ws = new ArrayList<>();
//        for (Widget w: widgets) {
//            if (w.getTopicId().equals(tid)) {
//                ws.add(w);
//            }
//        }
//        return ws;
    }

    public int updateWidget(String wid, Widget widget) {
        if (repository.findById(Long.parseLong(wid)).isPresent()) {
            Widget originalWidget = repository.findById(Long.parseLong(wid)).get();

            if (widget.getName() != null) {
                originalWidget.setName(widget.getName());
            }

            if (widget.getType() != null) {
                originalWidget.setType(widget.getType());
            }

            originalWidget.setWidgetOrder(widget.getWidgetOrder());

            if (widget.getText() != null) {
                originalWidget.setText(widget.getText());
            }

            if (widget.getUrl() != null) {
                originalWidget.setUrl(widget.getUrl());
            }

            originalWidget.setSize(widget.getSize());

            originalWidget.setWidth(widget.getWidth());

            originalWidget.setHeight(widget.getHeight());

            if (widget.getCssClass() != null) {
                originalWidget.setCssClass(widget.getCssClass());
            }

            if (widget.getStyle() != null) {
                originalWidget.setStyle(widget.getStyle());
            }

            if (widget.getValue() != null) {
                originalWidget.setValue(widget.getValue());
            }

            originalWidget.setOrdered(widget.isOrdered());

            repository.save(originalWidget);
            return 1;
        }

        return 0;
    }

    public int deleteWidget(String wid) {
        repository.deleteById(Long.parseLong(wid));
//        int index;
//
//        for (int i = 0; i < widgets.size(); i++) {
//            if (widgets.get(i).getId().equals(Long.parseLong(wid))) {
//                index = i;
//                widgets.remove(index);
//                return 1;
//            }
//        }

        return 0;
    }

    public List<Widget> findAllWidgets() {
        return (List<Widget>) repository.findAll();
    }
}
