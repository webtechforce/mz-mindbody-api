<?php ?>

    <p><?php echo sprintf(__('Displaying events from %1$s to %2$s.', 'mz-mindbody-api'),
            $data->display_time_frame['start']->format('F j'),
            $data->display_time_frame['end']->format('F j')); ?></p>

<?php if (empty($data->atts['week-only'])): ?>
<div id="mzScheduleNavHolder">
    <a href="#" class="previous" data-offset="-1"><?php _e('Previous Events', 'mz-mindbody-api'); ?></a> -
    <a href="#" class="following" data-offset="1"><?php _e('Future Events', 'mz-mindbody-api'); ?></a>
</div>
<?php endif; ?>

<?php
if ($data->atts['list'] != 0):
    include('event_listing_full.php');
else:
    include('event_listing_list.php');
endif;