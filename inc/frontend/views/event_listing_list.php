<?php
use MZ_Mindbody as NS;
use MZ_Mindbody\Inc\Core as Core;

if ((is_array($data->events)) && !empty($data->events)): ?>
    <table class="mz_event_list_listing">

        <thead>
            <tr class="header" style="display: table-row">
                <th class="mz_event_date_display" scope="header">
                    <?php echo $data->heading_date; ?>
                </th>
                <th class="mz_event_classDetails" scope="header">
                    <?php echo $data->heading_time; ?>
                </th>
                <th class="mz_event_name" scope="header">
                    <?php echo $data->heading_event; ?>
                </th>
                <?php if ( $data->locations_count >= 2 ): ?>
                    <th class="mz_event_location" scope="header">
                        <?php echo $data->heading_location; ?>
                    </th>
                <?php endif; ?>
            </tr>
        </thead>

    <?php foreach ($data->events as $date => $events): ?>
        <?php foreach ($events as $event): ?>
        <tbody>
            <tr>
                <td><?php echo date_i18n(Core\MZ_Mindbody_Api::$date_format, strtotime($event->startDateTime)); ?> <br /><?php echo $event->sign_up_link->build(); ?></td>
                <td>
                    <?php echo date_i18n(Core\MZ_Mindbody_Api::$time_format, strtotime($event->startDateTime)); ?> -
                    <?php echo date_i18n(Core\MZ_Mindbody_Api::$time_format, strtotime($event->endDateTime)); ?>
                </td>
                <td>
                    <?php echo $event->class_name_link->build() . ' ' . $data->with . ' ' . $event->staff_name_link->build(); ?>

                </td>
                <?php
                // Display location if showing schedule for more than one location
                if($data->locations_count >= 2): ?>
                <td>
                    <?php echo $data->locations_dictionary[$event->location_ID]['link']; ?>
                </td>
                <?php endif; ?>
            </tr>
            <?php endforeach; ?>
        <?php endforeach; ?>
        </tbody>
    </table>
<?php elseif (count($data->events) == 0 ): ?>
    <h4><?php echo $data->no_events; ?></h4>
<?php else: ?>
    <div class="error"><?php _e('Error Retrieving Events', 'mz_mindbody_api'); ?></div>
    <p><?php var_dump( $data->events ); ?></p>

<?php endif; ?>