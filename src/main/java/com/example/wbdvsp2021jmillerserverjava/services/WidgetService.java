package com.example.wbdvsp2021jmillerserverjava.services;

import com.example.wbdvsp2021jmillerserverjava.models.Widget;
import com.example.wbdvsp2021jmillerserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository repository;

    public Widget createWidget(String tid, Widget widget) {
        widget.setTopicId(tid);
        return repository.save(widget);
    }

    public List<Widget> findWidgetsForTopic(String tid) {
        return repository.findWidgetsForTopic(tid);
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
        return 0;
    }

    public List<Widget> findAllWidgets() {
        return (List<Widget>) repository.findAll();
    }
}
